import { Button } from "@/components/ui/button";
import { House } from "lucide-react";

export default function Home() {
  return (
    <div className=" h-screen flex items-center justify-center">
      <Button>
        <House /> Home Page
      </Button>
    </div>
  );
}