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

export default function create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  async function onSubmit(data) {
    const { title, description, price, condition } = data;
    const res = await fetch('http://localhost:5000/api/ads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description, price, condition }),
    });
    const ad = await res.json();

    // await router.push(`/ads/${ad._id}`);
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

        {/* <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture"
          beforeUpload={() => false}
        >
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload> */}

        <div className="form-group">
          <div class="form-group ">
            <label for="img">Image URL</label>
            <input
              {...register('img', { required: true })}
              placeholder="https://example.com"
              type="url"
              class="form-control"
              id="img"
            />
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
