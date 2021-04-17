import { Route } from "react-router";

function AdminTemplate(props) {
  return (
    <div>
      <main> {props.children} </main>
    </div>
  );
}

function RouterAdminTemplate({ path, exact, Component, key }) {
  return (
    <Route path={path} exact={exact} key={key}>
      <AdminTemplate>
        <Component />
      </AdminTemplate>
    </Route>
  );
}

export default RouterAdminTemplate;
