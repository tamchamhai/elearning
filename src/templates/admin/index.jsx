import { Route } from "react-router";

function AdminTemplate(props) {
  return (
    <div>
      <main> {props.children} </main>
    </div>
  );
}

function RouterAdminTemplate({ path, exact, Component }) {
  return (
    <Route path={path} exact={exact}>
      <AdminTemplate>
        <Component />
      </AdminTemplate>
    </Route>
  );
}

export default RouterAdminTemplate;
