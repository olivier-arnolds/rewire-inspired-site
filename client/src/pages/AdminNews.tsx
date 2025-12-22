import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  RefreshCw, 
  Check, 
  X, 
  Trash2, 
  ExternalLink,
  Calendar,
  Newspaper,
  Filter
} from "lucide-react";
import { toast } from "sonner";
import { Helmet } from "react-helmet-async";

export default function AdminNews() {
  const [statusFilter, setStatusFilter] = useState<"pending" | "approved" | "rejected" | undefined>(undefined);
  
  const { data: newsItems, isLoading, refetch } = trpc.news.getAll.useQuery(
    { status: statusFilter },
    { refetchOnWindowFocus: false }
  );
  
  const fetchFromRSS = trpc.news.fetchFromRSS.useMutation({
    onSuccess: (data) => {
      toast.success(data.message);
      refetch();
    },
    onError: (error) => {
      toast.error(`Failed to fetch news: ${error.message}`);
    },
  });
  
  const updateStatus = trpc.news.updateStatus.useMutation({
    onSuccess: () => {
      toast.success("News item status updated");
      refetch();
    },
    onError: (error) => {
      toast.error(`Failed to update status: ${error.message}`);
    },
  });
  
  const deleteNews = trpc.news.delete.useMutation({
    onSuccess: () => {
      toast.success("News item deleted");
      refetch();
    },
    onError: (error) => {
      toast.error(`Failed to delete: ${error.message}`);
    },
  });

  const handleApprove = (id: number) => {
    updateStatus.mutate({ id, status: "approved" });
  };

  const handleReject = (id: number) => {
    updateStatus.mutate({ id, status: "rejected" });
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this news item?")) {
      deleteNews.mutate({ id });
    }
  };

  const handleFetchRSS = () => {
    fetchFromRSS.mutate();
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-500">Approved</Badge>;
      case "rejected":
        return <Badge variant="destructive">Rejected</Badge>;
      case "pending":
        return <Badge variant="secondary">Pending</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <>
      <Helmet>
        <title>News Management | Admin Dashboard</title>
      </Helmet>
      
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">AI News Management</h1>
            <p className="text-muted-foreground">
              Manage AI industry news from RSS feeds with approval workflow
            </p>
          </div>

          {/* Action Bar */}
          <div className="flex flex-wrap gap-4 mb-6">
            <Button
              onClick={handleFetchRSS}
              disabled={fetchFromRSS.isPending}
              className="gap-2"
            >
              <RefreshCw className={`w-4 h-4 ${fetchFromRSS.isPending ? "animate-spin" : ""}`} />
              Fetch from RSS Feeds
            </Button>

            <div className="flex gap-2 ml-auto">
              <Button
                variant={statusFilter === undefined ? "default" : "outline"}
                onClick={() => setStatusFilter(undefined)}
                size="sm"
              >
                <Filter className="w-4 h-4 mr-2" />
                All
              </Button>
              <Button
                variant={statusFilter === "pending" ? "default" : "outline"}
                onClick={() => setStatusFilter("pending")}
                size="sm"
              >
                Pending
              </Button>
              <Button
                variant={statusFilter === "approved" ? "default" : "outline"}
                onClick={() => setStatusFilter("approved")}
                size="sm"
              >
                Approved
              </Button>
              <Button
                variant={statusFilter === "rejected" ? "default" : "outline"}
                onClick={() => setStatusFilter("rejected")}
                size="sm"
              >
                Rejected
              </Button>
            </div>
          </div>

          {/* News Items Grid */}
          {isLoading ? (
            <div className="text-center py-12">
              <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">Loading news items...</p>
            </div>
          ) : newsItems && newsItems.length > 0 ? (
            <div className="grid gap-6">
              {newsItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {getStatusBadge(item.status)}
                          <Badge variant="outline">{item.category}</Badge>
                          <span className="text-sm text-muted-foreground">
                            {item.source}
                          </span>
                        </div>
                        <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(item.publishedDate).toLocaleDateString()}
                          </span>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 hover:text-primary"
                          >
                            <ExternalLink className="w-4 h-4" />
                            View Original
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        {item.status !== "approved" && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleApprove(item.id)}
                            disabled={updateStatus.isPending}
                            className="gap-1"
                          >
                            <Check className="w-4 h-4" />
                            Approve
                          </Button>
                        )}
                        {item.status !== "rejected" && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleReject(item.id)}
                            disabled={updateStatus.isPending}
                            className="gap-1"
                          >
                            <X className="w-4 h-4" />
                            Reject
                          </Button>
                        )}
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDelete(item.id)}
                          disabled={deleteNews.isPending}
                          className="gap-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{item.summary}</p>
                    {item.feedSource && (
                      <p className="text-xs text-muted-foreground">
                        Feed: {item.feedSource}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-12 text-center">
                <Newspaper className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">No news items found</h3>
                <p className="text-muted-foreground mb-4">
                  Click "Fetch from RSS Feeds" to import the latest AI industry news
                </p>
                <Button onClick={handleFetchRSS} disabled={fetchFromRSS.isPending}>
                  <RefreshCw className={`w-4 h-4 mr-2 ${fetchFromRSS.isPending ? "animate-spin" : ""}`} />
                  Fetch News
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </>
  );
}
