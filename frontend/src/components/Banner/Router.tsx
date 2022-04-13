import React from 'react';
import Route from 'components/Banner/Route';
import RouteData from 'types/RouteData';
import { CommonCss } from 'styles/Style';


interface RouterProps {
    getPage: string,
    setPage: (page: string) => void,
    routes: RouteData[]
}

function Router(props: RouterProps) {
  const routerStyle =
    CommonCss.flex;
  
  return (
    <div className={routerStyle}>
      {props.routes.map((route, index) => {
        return (
          <Route
            key={index.toString()}
            route={route}
            getPage={props.getPage}
            setPage={props.setPage}/>
        );
      })}
    </div>
  );
}

export default Router;
