import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search/" + searchText);
  };
  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Button variant="dark" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default Search;