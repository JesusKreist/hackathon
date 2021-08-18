import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import * as React from "react";
import axios from "axios";

const FileUpload: React.FC = () => {
  const [file, setFile] = React.useState("");

  const handleUpload = (e: any) => {
    e.preventDefault();
    console.log(file);
    let data = new FormData();
    console.log(file + " this is image pathname");
    data.append("file", file);

    axios
      .post("http://f6507e22e305.ngrok.io/upload/add", data)
      .then((res) => {
        console.log(res.data + "this is data after api call");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleUpload}>
      <FormControl id="full-name">
        <FormLabel>Full Name</FormLabel>
        <Input
          id="file"
          type="file"
          onChange={(e) => setFile(e.target.value)}
          placeholder="Write something..."
          name="file"
          value={file}
          height="4rem"
        />
      </FormControl>

      <Button type="submit">Please submit</Button>
    </form>
  );
};

export default FileUpload;
