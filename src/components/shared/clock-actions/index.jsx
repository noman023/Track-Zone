import { useState } from "react";
import ClockForm from "../clock-form";

const defaultOffsets = [
  -11.5, -11, -10.5, -10, -9.5, -9, -8.5, -8, 0, 1, 2, 3, 4, 5, 5.5, 6, 6.5, 7,
];

const ClockActions = ({
  local = false,
  clock,
  updateClock,
  createClock,
  deleteClock,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

  // const handleChange = (e) => {
  //   let { name, value } = e.target;

  //   if (name === "offset") {
  //     value = Number(value) * 60;
  //   }

  //   updateClock({
  //     [name]: value,
  //   });
  // };

  const handleClock = (data) => {
    createClock(data);
  };

  return (
    <div>
      <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
      {local ? (
        <button onClick={() => setIsCreate(!isCreate)}>Create</button>
      ) : (
        <button onClick={() => deleteClock(clock.id)}>Delete</button>
      )}

      {isEdit && (
        <>
          <h3>Edit Clock</h3>
          <ClockForm
            values={clock}
            handleClock={updateClock}
            title={!local}
            edit={true}
          />
        </>
      )}

      {isCreate && (
        <>
          <h3>Create a new clock</h3>
          <ClockForm handleClock={handleClock} />
        </>
      )}
    </div>
  );
};

export default ClockActions;

/*
<div>
					<input
						type='text'
						name='title'
						value={clock.title}
						onChange={handleChange}
					/>
					<select
						name='timezone'
						value={clock.timezone}
						onChange={handleChange}
					>
						<option value='GMT'>GMT</option>
						<option value='UTC'>UTC</option>
						<option value='PST'>PST</option>
						<option value='EST'>EST</option>
						<option value='EDT'>EDT</option>
						<option value='BST'>BST</option>
						<option value='MST'>MST</option>
					</select>
					{(clock.timezone === 'GMT' || clock.timezone === 'UTC') && (
						<select
							name='offset'
							value={clock.offset / 60}
							onChange={handleChange}
						>
							{defaultOffsets.map((offset) => (
								<option key={offset} value={offset}>
									{offset}
								</option>
							))}
						</select>
					)}
				</div>
*/
