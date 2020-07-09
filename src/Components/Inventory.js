import React from "react";
import { useForm } from "react-hook-form";
const Inventory = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://tranquil-ridge-31876.herokuapp.com/addFoods", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((result) => console.log("data successfuly inserted", result ));
  };
  return (
    <div className="container mt-5">
      <h3 className="text-center">Add data to database</h3>
      <div className="row">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="id"
            placeholder="id"
            ref={register({ required: true })}
          />
          {errors.id && <span>This field is required</span>}
          <br />
          <input
            name="foodCategory"
            placeholder="Food Category"
            ref={register({ required: true })}
          />
          {errors.foodCategory && <span>This field is required</span>}
          <br />
          <input
            name="foodTitle"
            placeholder="Food Title"
            ref={register({ required: true })}
          />
          {errors.foodTitle && <span>This field is required</span>}
          <br />
          <input
            name="price"
            type="number"
            placeholder="price"
            ref={register({ required: true })}
          />
          {errors.price && <span>This field is required</span>}
          <br />
          <input
            name="slug"
            placeholder="slug"
            ref={register({ required: true })}
          />
          {errors.slug && <span>This field is required</span>}
          <br />
          <input
            name="foodDescription"
            placeholder='Food Description"'
            ref={register({ required: true })}
          />
          {errors.foodDescription && <span>This field is required</span>}
          <br />
          <input
            name="foodImage"
            placeholder="Food Image URL"
            ref={register({ required: true })}
          />
          {errors.foodImage && <span>This field is required</span>}
          <br />
          {/* <input type="submit" /> */}
        </form>
      </div>
    </div>
  );
};

export default Inventory;
