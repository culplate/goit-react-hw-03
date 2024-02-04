import { useState } from "react";
import { ContactList } from "./ContactList/ContactList";
import { SearchBox } from "./SearchBox/SearchBox";
import "./App.css";

function App() {
  const [contact, setContact] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [searchVal, setSearchVal] = useState("");

  const handleSearch = (e) => {
    setSearchVal(e.target.value);
  };

  const filteredContacts = contact.filter((item) =>
    item.name.toLowerCase().includes(searchVal.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}
      <SearchBox val={searchVal} onSearch={handleSearch} />
      <ContactList contacts={filteredContacts} />
    </>
  );
}

export default App;
