const TestPage = async () => {
  const response = await fetch("https://bryan-food-delivery.onrender.com");
  const data = await response.json();
  return <div>{data.message}</div>;
};

export default TestPage;
