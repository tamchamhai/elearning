import { Route } from "react-router";

function MainTemplate(props) {
  return (
    <div>
      <main>{props.children}</main>
    </div>
  );
}
const RouterMainTemplate = ({ path, exact, Component, key }) => {
  return (
    <Route path={path} exact={exact} key={key}>
      <MainTemplate>
        <Component />
      </MainTemplate>
    </Route>
  );
};

export default RouterMainTemplate;
