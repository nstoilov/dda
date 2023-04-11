import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { createClient } from 'contentful';
import Link from 'next/link';
import Image from 'next/image';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const { items } = await client.getEntries({
    content_type: 'notFound',
  });

  return {
    props: {
      content: items[0],
    },
  };
}

export default function NotFound({ content }) {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 4000);
  }, []);

  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Where is the ducking page?</h2>
      <p>
        redirecting to <Link href="/">Homepage</Link>
      </p>
      <Image
        src={'https:' + content.fields.notFound.fields.file.url}
        width={'400'}
        height={'400'}
      />

      <style jsx>{`
        .not-found {
          background: #fff;
          padding: 30px;
          box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
          transform: rotateZ(-1deg);
        }
        h1 {
          font-size: 3em;
        }
      `}</style>
    </div>
  );
}
