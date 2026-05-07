"use client";

import { MDXRemote } from "next-mdx-remote/rsc";

export default function MdxContent({ source }: { source: string }) {
  return (
    <div className="prose max-w-none">
      <MDXRemote source={source} />
    </div>
  );
}
