import { auth, signIn, signOut } from '@/auth';

export default async function Home() {
  const session = await auth();

  if (!session) {
    return (
      <>
        <p>Not signed in</p>
        <form
          action={async () => {
            'use server';
            await signIn('google');
          }}
        >
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
          >
            Signin with Google
          </button>
        </form>
      </>
    );
  }

  return (
    <>
      <h1>Welcome to the Home Page</h1>

      <pre>{JSON.stringify(session.user, null, 2)}</pre>

      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
        >
          Signout
        </button>
      </form>
    </>
  );
}
