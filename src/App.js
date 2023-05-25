import { Stack } from "@chakra-ui/react";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { auth } from "./Config/firebase";
import Layout from "./Layouts";
import AuthRouter from "./Router/AuthRouter";
import MainRouter from "./Router/MainRouter";

function App() {
  const [isLoggedin, setIsLoggedin] = useState(true);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLoggedin(true);
    } else {
      setIsLoggedin(false);
    }
  });



  return (
    <Stack>
      {isLoggedin ? (
        <Layout>
          <MainRouter />
        </Layout>
      ) : (
        <AuthRouter />
      )}
    </Stack>
  );

  // return (
  //   <Layout>
  //     <MainRouter />
  //   </Layout>

    
  // );
}

export default App;
