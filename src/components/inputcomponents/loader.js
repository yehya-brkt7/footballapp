import { Loader } from "@mantine/core";

const styles = {
  position: "fixed",
  top: "50%",
  left: "50%",
  zIndex: "100",
};
function LoaderDemo() {
  return <Loader color="green" size="xl" variant="bars" style={styles} />;
}

export default LoaderDemo;
