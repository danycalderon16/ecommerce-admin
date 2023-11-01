"use client";
import React from "react";
import { useParams } from "next/navigation";
import { UseOrigin } from "@/hooks/use-origin";
import { ApiAlert } from "@/components/ui/api-alert";

interface ApiLstProps {
  entityName: string;
  entityIdName: string;
}

export const ApiLst: React.FC<ApiLstProps> = ({ entityIdName, entityName }) => {
  const params = useParams();
  const origin = UseOrigin();

  const baseURL = `${origin}/api/${params.storeId}`;
  return (
    <>
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseURL}/${entityName}`}
      />

      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseURL}/${entityName}/{${entityIdName}}`}
      />
      <ApiAlert
        title="POST"
        variant="admin"
        description={`${baseURL}/${entityName}`}
      />
       <ApiAlert
        title="PATCH"
        variant="admin"
        description={`${baseURL}/${entityName}/{${entityIdName}}`}
      />
       <ApiAlert
        title="DELETE"
        variant="admin"
        description={`${baseURL}/${entityName}/{${entityIdName}}`}
      />
    </>
  );
};
