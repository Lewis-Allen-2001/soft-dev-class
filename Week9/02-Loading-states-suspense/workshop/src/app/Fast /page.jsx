import { SlowComponent } from "../components/SlowComponent";
import { Suspense } from "react";

export default function FastPage() {
    return (
      <div>
        <h2>Fast page</h2>
        <Suspense fallback={<p>Loading...</p>}>
          <SlowComponent />
        </Suspense>
      </div>
    );
  }