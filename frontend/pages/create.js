//check auth
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useSession, getSession, signIn, signOut } from 'next-auth/react';

export default function create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const { data: session } = useSession();

  async function onSubmit(data) {
    const { title, description, price, condition, image_url } = data;
    const { _id } = session.user;
    const res = await fetch('http://localhost:5000/api/ads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
        price,
        condition,
        image_url,
        user: _id,
      }),
    });
    const ad = await res.json();
    console.log(data);

    await router.push(`/posts/${ad._id}`);
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
        {errors.title ? <p>{errors.title?.message}</p> : ''}
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
        {/* price */}
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
        {/* Condition */}
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

        {/* Image url */}
        <div className="form-group">
          <div className="form-group ">
            <label for="img">Image URL</label>
            <input
              {...register('image_url', { required: true })}
              placeholder="https://example.com"
              type="url"
              className="form-control"
              id="img"
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
