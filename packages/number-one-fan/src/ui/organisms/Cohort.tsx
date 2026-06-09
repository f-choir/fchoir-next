const Cohort = ({ cohort }: { cohort: any }) => (
  <div className="text-center mb-8 mt-4">
    <h3 className="text-2xl my-2 font-bastardoSemi text-white">{cohort.title.toUpperCase()}</h3>
    <p className="text-l text-white">{cohort.names.sort().reduce((a: string, c: string) => `${a} - ${c}`)}</p>
  </div>
);

export default Cohort;
