import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Avatar } from "@/components/ui/Avatar";

export default function Settings() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 p-6">
      <h1 className="font-display text-2xl font-bold text-ink">Settings</h1>

      <Card>
        <CardHeader>
          <h2 className="text-sm font-semibold text-ink">Profile</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <Avatar name="Sam" className="h-14 w-14 text-base" />
            <Button variant="secondary" size="sm">
              Change photo
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-ink-soft">Full name</label>
              <Input defaultValue="Sam" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-ink-soft">Email</label>
              <Input type="email" placeholder="you@example.com" />
            </div>
          </div>
          <Button size="sm">Save changes</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2 className="text-sm font-semibold text-ink">Connected accounts</h2>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between rounded-lg border border-line px-4 py-3">
            <span className="text-sm text-ink">Google Drive</span>
            <Button size="sm" variant="secondary">
              Connect
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2 className="text-sm font-semibold text-coral-500">Danger zone</h2>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <p className="text-sm text-ink-soft">Permanently delete your account and all documents.</p>
            <Button size="sm" variant="danger">
              Delete account
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
