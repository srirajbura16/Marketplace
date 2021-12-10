// list ad deatils, along with user info.
import Ad from '../../components/Ads/Ad';

export default function AdDetails({ data: ad }) {
  console.log(ad);
  return <div>ad</div>;
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  console.log(id);
  const res = await fetch(`http://localhost:5000/api/ads/${id}`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
