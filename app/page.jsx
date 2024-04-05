import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl">Welcome to My Pension Tree</h1>
      <p>
        Maximum Tax Savings, Largest Retirement Plan Contributions,<br></br>
        Qualified financial advisors to help you grow your Penstion Tree for the
        future!
      </p>
      <Link href="/qualify">Qualifications</Link>
    </div>
  );
};

export default HomePage;
