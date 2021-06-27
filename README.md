## How to use

Install it and run:

```bash
cd NextJsBlog

npm install
npm run dev
# or
yarn
yarn dev
```

problems:
1 Too slow loading SSR. I have two ideas what is the reason: 1.1 My pc is slow. 1.2 Reoloading all redux store with wrapper.getStaticProps.

2 Design. I hope it isn't important)

3 Client should work different way. Client should handle success and faild sendData request.
