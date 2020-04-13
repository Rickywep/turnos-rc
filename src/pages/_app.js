import React from "react";
import "./../styles/global.scss";
import NavbarCustom from "./../components/NavbarCustom";
import IndexPage from "./index";
import AuthTypePage from "./authtype";
import AdminPage from "./admin";
import { Switch, Route, Router } from "./../util/router.js";
import Footer from "./../components/Footer";
import { ProvideAuth } from "./../util/auth.js";

function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <>
          <NavbarCustom
            bg="light"
            variant="light"
            expand="md"
            logo="https://campus.rollingcodeschool.com/pluginfile.php/1/core_admin/logo/0x200/1565638965/logo2.png"
          ></NavbarCustom>

          <Switch>
            <Route exact path="/" component={IndexPage} />

            <Route exact path="/auth/:type" component={AuthTypePage} />

            <Route exact path="/admin" component={AdminPage} />

            <Route
              component={({ location }) => {
                return (
                  <div
                    style={{
                      padding: "50px",
                      width: "100%",
                      textAlign: "center"
                    }}
                  >
                    The page <code>{location.pathname}</code> could not be
                    found.
                  </div>
                );
              }}
            />
          </Switch>

          <Footer
            bg="light"
            textColor="dark"
            size="sm"
            bgImage=""
            bgImageOpacity={1}
            description="A short description of what you do here"
            copyright="© 2020"
            logo="https://campus.rollingcodeschool.com/pluginfile.php/1/core_admin/logo/0x200/1565638965/logo2.png"
          ></Footer>
        </>
      </Router>
    </ProvideAuth>
  );
}

export default App;
