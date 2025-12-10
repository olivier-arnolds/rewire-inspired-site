import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet-async";
import { Mail, Building2, Calendar, MessageSquare, Download, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function AdminDashboard() {
  const { data: user } = trpc.auth.me.useQuery();
  const { data: submissions, isLoading } = trpc.contact.list.useQuery(undefined, {
    enabled: user?.role === "admin",
  });

  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const handleExport = () => {
    if (!submissions || submissions.length === 0) {
      toast.error("No submissions to export");
      return;
    }

    // Create CSV content
    const headers = ["ID", "Name", "Email", "Company", "Message", "Submitted At"];
    const rows = submissions.map(sub => [
      sub.id,
      sub.name,
      sub.email,
      sub.company || "N/A",
      sub.message.replace(/\n/g, " "),
      new Date(sub.createdAt).toLocaleString(),
    ]);

    const csv = [
      headers.join(","),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(",")),
    ].join("\n");

    // Download CSV
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `contact-submissions-${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    toast.success("Submissions exported successfully");
  };

  // Redirect if not admin
  if (user && user.role !== "admin") {
    return (
      <Layout>
        <Helmet>
          <title>Access Denied | Eclectik</title>
        </Helmet>
        <div className="container min-h-screen flex items-center justify-center">
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>Access Denied</CardTitle>
              <CardDescription>
                You do not have permission to access this page.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>Admin Dashboard | Eclectik</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className="min-h-screen pt-32 pb-20">
        <div className="container">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Contact Submissions</h1>
              <p className="text-muted-foreground">
                Manage and review all contact form submissions
              </p>
            </div>
            <Button
              onClick={handleExport}
              disabled={!submissions || submissions.length === 0}
              className="bg-primary hover:bg-primary/90"
            >
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Submissions</CardTitle>
                <Mail className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : submissions?.length || 0}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">This Month</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {isLoading ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    submissions?.filter(sub => {
                      const date = new Date(sub.createdAt);
                      const now = new Date();
                      return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
                    }).length || 0
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Unique Companies</CardTitle>
                <Building2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {isLoading ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    new Set(submissions?.map(sub => sub.company).filter(Boolean)).size
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Submissions Table */}
          <Card>
            <CardHeader>
              <CardTitle>All Submissions</CardTitle>
              <CardDescription>
                Click on a row to view the full message
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                </div>
              ) : !submissions || submissions.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No submissions yet</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Message Preview</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {submissions.map((submission) => (
                        <>
                          <TableRow
                            key={submission.id}
                            className="cursor-pointer hover:bg-muted/50"
                            onClick={() => setExpandedRow(expandedRow === submission.id ? null : submission.id)}
                          >
                            <TableCell className="font-medium">{submission.name}</TableCell>
                            <TableCell>
                              <a
                                href={`mailto:${submission.email}`}
                                className="text-primary hover:underline"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {submission.email}
                              </a>
                            </TableCell>
                            <TableCell>{submission.company || "—"}</TableCell>
                            <TableCell className="max-w-xs truncate">
                              {submission.message}
                            </TableCell>
                            <TableCell className="whitespace-nowrap">
                              {new Date(submission.createdAt).toLocaleDateString()}
                            </TableCell>
                            <TableCell>
                              <Badge variant="secondary">New</Badge>
                            </TableCell>
                          </TableRow>
                          {expandedRow === submission.id && (
                            <TableRow>
                              <TableCell colSpan={6} className="bg-muted/30">
                                <div className="p-4 space-y-2">
                                  <div className="flex items-start gap-2">
                                    <MessageSquare className="w-4 h-4 mt-1 text-muted-foreground" />
                                    <div>
                                      <p className="text-sm font-medium mb-1">Full Message:</p>
                                      <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                                        {submission.message}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <Calendar className="w-3 h-3" />
                                    Submitted: {new Date(submission.createdAt).toLocaleString()}
                                  </div>
                                </div>
                              </TableCell>
                            </TableRow>
                          )}
                        </>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
