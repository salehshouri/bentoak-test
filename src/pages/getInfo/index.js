import Header from "./components/Header";
import Text from "../../components/Text";
import Form from "./components/Form";
const GetInfo = () => {
  return (
    <>
      <Header />
      <div className="p-3">
        <Text variant="h1" className="mb-3">
          همین اول کار امتیاز بگیر!{" "}
        </Text>
        <Text variant="p">
          میتونی بیخیال این صفحه بشی، ولی اگه الان کاملش کنی بیشتر امتیاز
          میگیری.
        </Text>

        <Form />
      </div>
    </>
  );
};

export default GetInfo;
