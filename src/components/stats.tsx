import "../switzer.css";
import { ClientExpense } from "./client-expense-element";
import { GirlImage } from "./girl-img-element";
import { ReductionTime } from "./reduction-time-element";
import { Staff } from "./staff-element";
export const Stats = () => {
  return (
    <section className="relative z-10">
      <GirlImage />
      <ReductionTime />
      <Staff />
      <ClientExpense />
    </section>
  );
};
