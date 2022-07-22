import { useId, useState, useMemo, startTransition, useTransition, useDeferredValue } from "react";
import StudentList from "./StudentList";
import dataStudent from "../mocks/data";
const FormComponent = () => {
  const id = useId();
  const [value, setValue] = useState("");
  // const [text, setText] = useState("");
  // const [isLoading, startTransition] = useTransition ();
  const defferdValue = useDeferredValue(value);

  // const data = useMemo(() => {
  //   return dataStudent.map((item) => {
  //     const index = item.indexOf(text);
  //     return index === -1 ? (
  //       <div>{item}</div>
  //     ) : (
  //       <div>
  //         {item.slice(0, index)}
  //         <span style={{ backgroundColor: "yellow" }}>
  //           {item.slice(index, index + text.length)}
  //         </span>
  //         {item.slice(index + text.length)}

  //       </div>
  //     );
  //   });
  // }, [text]);

  // const data = useMemo(() => {
  //   return dataStudent.map((item) => {
  //     const index = item.indexOf(defferdValue);
  //     return index === -1 ? (
  //       <div>{item}</div>
  //     ) : (
  //       <div>
  //         {item.slice(0, index)}
  //         <span style={{ backgroundColor: "yellow" }}>
  //           {item.slice(index, index + defferdValue.length)}
  //         </span>
  //         {item.slice(index + defferdValue.length)}

  //       </div>
  //     );
  //   });
  // }, [defferdValue]);

  const data = useMemo(() => {
    return dataStudent.map((item) => {
      const index = item.indexOf(value);
      return index === -1 ? (
        <div>{item}</div>
      ) : (
        <div>
          {item.slice(0, index)}
          <span style={{ backgroundColor: "yellow" }}>
            {item.slice(index, index + value.length)}
          </span>
          {item.slice(index + value.length)}

        </div>
      );
    });
  }, [value]);

  const handleSearch = (e) => {
    setValue(e.target.value);
    // startTransition(() =>{
    //     setText(e.target.value);
    // })
  };

  return (
    <div>
      <label htmlFor={id}>Form</label>
      <input value={value} type="text" id={id} onChange={handleSearch} />
      {/* {isLoading ? <p>Loading...</p> : <StudentList data={data} />} */}
      <StudentList data={data} />

    </div>
  );
};

export default FormComponent;
