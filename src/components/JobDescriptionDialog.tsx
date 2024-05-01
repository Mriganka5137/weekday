// const JobDescriptionDialog = () => {
//   return (
//     <div className=" absolute bottom-0 left-1/2 -translate-x-1/2 z-50  text-lg  text-blue-700 font-light">
//       Show more
//     </div>
//   );
// };

// export default JobDescriptionDialog;
import * as React from "react";

export default function JobDescriptionDialog({
  jobDetailsFromCompany,
}: {
  jobDetailsFromCompany: string;
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={handleClickOpen}>Show More</button>

      <div
        className={`${open ? "fixed" : "hidden"}
            size-[800px]  p-5 z-1000 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-xl border border-gray-200`}
      >
        <p>Job Details</p>
        <p>{jobDetailsFromCompany}</p>
        <button onClick={handleClose}>CLose</button>
      </div>
    </>
  );
}
