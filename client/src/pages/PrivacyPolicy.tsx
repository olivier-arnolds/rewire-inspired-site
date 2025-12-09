import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-light mb-8 text-foreground">Privacy Policy</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <div className="p-6 border border-border rounded-lg bg-card/50 backdrop-blur-sm">
            <p className="italic text-muted-foreground">
              Content for the Privacy Policy is currently being updated. Please check back soon or contact us for more information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
