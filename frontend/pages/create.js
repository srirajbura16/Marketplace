//check auth
//reroute to login page in not authenticated
// Form
//   Title
//   Description
//   Price
//   Condition
//   Upload Picture
//   Submit
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

export default function create() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log(errors);
  async function onSubmit({ title, description, price, condition }) {
    const res = await fetch('http://localhost:5000/api/ads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description, price, condition }),
    });
    const data = res.json();
    console.log(data);
    // console.log(res);

    // await router.push('/ads/');
  }

  return (
    <div className="container-sm min-vh-100">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* title */}
        <div className="form-group">
          <label for="exampleFormControlInput1">Title</label>
          <input
            {...register('title', {
              required: 'Required',
              minLength: {
                value: 4,
                message: 'Title needs to be more than 4 characters',
              },
            })}
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Title"
          />
        </div>
        <p>{errors.title?.message}</p>
        {/* description */}
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Description</label>
          <textarea
            {...register('description', { required: true })}
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        {/* price and condition */}
        <div className="form-group">
          <div class="form-group ">
            <label for="inputEmail4">$ Price</label>
            <input
              {...register('price', { required: true })}
              type="number"
              class="form-control"
              id="inputEmail4"
            />
          </div>
        </div>

        <div className="form-group">
          <div class="form-group ">
            <label for="inputState">Condition</label>
            <select
              {...register('condition', { required: true })}
              selected
              id="inputState"
              class="form-control"
            >
              <option selected disabled hidden>
                Choose...
              </option>
              <option>New</option>
              <option>Used - Like New</option>
              <option>Used - Good</option>
              <option>Used - Fair</option>
            </select>
          </div>
        </div>

        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture"
          beforeUpload={() => false}
        >
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>

        {/* <input
          type="text"
          placeholder="Title"
          {...register('Title', { min: 4 })}
        />
        <textarea {...register('Description', {})} />
        <input type="number" placeholder="Price" {...register('Price', {})} />
        <select {...register}>
          <option value="New">New</option>
          <option value=" Used - Like New"> Used - Like New</option>
          <option value=" Used - Good"> Used - Good</option>
          <option value=" Used - Fair"> Used - Fair</option>
        </select> */}
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

{
  /* <input
          type="text"
          placeholder="Title"
          {...register('Title', { min: 4 })}
        />
        <textarea {...register('Description', {})} />
        <input type="number" placeholder="Price" {...register('Price', {})} />
        <select {...register}>
          <option value="New">New</option>
          <option value=" Used - Like New"> Used - Like New</option>
          <option value=" Used - Good"> Used - Good</option>
          <option value=" Used - Fair"> Used - Fair</option>
        </select> */
}
