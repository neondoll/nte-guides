import { type FC, type ReactNode, useEffect } from "react";
import { Link } from "react-router";

import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useArcs } from "@/hooks/use-arcs";
import PATHS from "@/paths";

const ArcsLayout: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <div className="space-y-4 md:space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to={PATHS.Home}>Главная</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Дуги</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {children}
    </div>
  );
};
const ArcsPage: FC = () => {
  const { data, fetch, loading } = useArcs();

  useEffect(() => {
    fetch();
  }, []);

  if (loading) {
    return (
      <ArcsLayout>
        <div>Loading...</div>
      </ArcsLayout>
    );
  }

  return (
    <ArcsLayout>
      <div className="grid grid-cols-[repeat(auto-fit,--spacing(47))] gap-4 justify-center md:gap-6">
        {data.map(item => (
          <Card key={item.id} size="sm">
            <CardContent>
              <img
                alt={item.name}
                className="aspect-square size-37"
                src={item.image ?? "images/currently-unavailable.png"}
              />
            </CardContent>
            <CardHeader>
              <CardTitle className="text-base text-center whitespace-normal">{item.name}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </ArcsLayout>
  );
};

export default ArcsPage;
