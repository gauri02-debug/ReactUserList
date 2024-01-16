import React from "react";
import CreatableSelect from "react-select/creatable";
import { components } from "react-select";

const Dropdown = () => {
  const options = [
    {
      value: "ABCD",
      label: "ABCD",
      email: "ABCD@gmail.com",
      color: "#FF8Ba4",
      logo: "https://images.unsplash.com/photo-1544642899-f0d6e5f6ed6f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNpbmdsZSUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      value: "DEF",
      label: "DEF",
      email: "DEF@gmail.com",
      color: "#32a8a1",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ_SEpxJE_9PCTfFmp2RAx9rGL7BB56rJSh1sPSlMj4Q&s",
    },
    {
      value: "GHI",
      label: "GHI",
      email: "GHI@gmail.com",
      color: "#a88b32",
      logo: "https://i.guim.co.uk/img/media/9b089d0d5d0939056d2be35001310adc0f355895/946_287_3140_1884/master/3140.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=51ec094b8672595d76d321e0ee6421f6",
    },
    
    {
      value: "JKL",
      label: "JKL",
      email: "JKL@gmail.com",
      color: "#324ca4",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ_SEpxJE_9PCTfFmp2RAx9rGL7BB56rJSh1sPSlMj4Q&s",
    },
    {
      value: "MNO",
      label: "MNO",
      email: "MNO@gmail.com",
      color: "#7f32f1",
      logo: "https://d187goyob322lh.cloudfront.net/Pictures/480xAny/0/6/4/7064_Church_failing.png",
    },
    {
      value: "XYZ",
      label: "XYZ",
      email: "XYZ@gmail.com",
      color: "#a83210",
      logo: "https://assets.entrepreneur.com/content/3x2/2000/20150820205507-single-man-outdoors-happy-bliss.jpeg",
    },
  ];

  const colorStyles = {
    control: (styles) => ({
      ...styles,
      borderBottom: "1px solid blue",
      
      borderRadius: "8px",
      backgroundColor: "white",
    }),
    option: (styles, { data }) => {
      return {
        ...styles,
        color: data.color,
        borderRadius: "8px",
  
        display: "flex",
        alignItems: "center",
        padding: "10px",
      };
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: data.color,
        color: "#fff",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: "4px",
      };
    },
    multiValueLabel: (styles, { data }) => {
      return {
        ...styles,
        color: "#fff",
        paddingLeft: "8px",
      };
    },
    multiValueRemove: (styles, { data }) => {
      return {
        ...styles,
        color: "#fff",
        cursor: "pointer",
        ":hover": {
          color: "#fff",
        },
      };
    },
  };

  const OptionWithLogo = (props) => (
    <components.Option {...props}>
      <img
        src={props.data.logo}
        alt={props.label}
        style={{
          marginRight: "8px",
          borderRadius: "50%",
          height: "25px",
          width: "25px",
        }}
      />
      <div>
        <div>{props.label}</div>
        <div style={{ fontSize: "0.8em", color: "#777" }}>
          {props.data.email}
        </div>
      </div>
    </components.Option>
  );

  const MultiValueWithLogo = (props) => (
    <components.MultiValue {...props}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {
          <img
            src={props.data.logo}
            alt={props.label}
            style={{
              marginRight: "4px",
              borderRadius: "50%",
              height: "25px",
              width: "25px",
            }}
          />
        }
        {props.data.label}
      </div>
    </components.MultiValue>
  );

  const handleChange = (selectedOption, actionMeta) => {
    console.log("handleChange", selectedOption, actionMeta);
  };

  const handleInputChange = (inputValue, actionMeta) => {
    console.log("handleInputChange", inputValue, actionMeta);
  };

  return (
    <CreatableSelect
      options={options}
      onChange={handleChange}
      onInputChange={handleInputChange}
      isMulti
      styles={colorStyles}
      placeholder={"Add new users..."}
      components={{
        Option: OptionWithLogo,
        MultiValue: MultiValueWithLogo,
      }}
    />
  );
};

export default Dropdown;
