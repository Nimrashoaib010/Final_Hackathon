import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

export default function Attendance() {
  const [time, setTime] = useState(new Date());
  const [checkInTime, setCheckInTime] = useState(null);
  const [checkOutTime, setCheckOutTime] = useState(null);
  const [duration, setDuration] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCheckIn = () => {
    setCheckInTime(new Date());
    setCheckOutTime(null);
    setDuration(null);
  };

  const handleCheckOut = () => {
    const outTime = new Date();
    setCheckOutTime(outTime);

    const diffMs = outTime - checkInTime;
    const diffMins = Math.floor(diffMs / 60000);
    const hours = Math.floor(diffMins / 60);
    const minutes = diffMins % 60;

    setDuration({ hours, minutes });
  };

  return (
    <div className="bg-gray-100 p-8 rounded-2xl shadow-xl max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Clock size={22} className="text-blue-600" /> Check IN / Check OUT
        </h2>
        <p className="text-sm text-gray-500">
          🕒 {time.toLocaleTimeString()}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button
          onClick={handleCheckIn}
          className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition font-semibold"
        >
          ✅ Check In
        </button>
        <button
          onClick={handleCheckOut}
          className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition font-semibold"
        >
          🚪 Check Out
        </button>
      </div>

      {/* Status Section */}
      <div className="space-y-2 text-blue-700 font-medium">
        {checkInTime && (
          <div>✅ Checked In at: <span className="font-semibold">{checkInTime.toLocaleTimeString()}</span></div>
        )}
        {checkOutTime && (
          <div>🚪 Checked Out at: <span className="font-semibold">{checkOutTime.toLocaleTimeString()}</span></div>
        )}
        {duration && (
          <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded text-green-800 font-semibold">
            ⏳ Total Work Duration: {duration.hours} hours {duration.minutes} minutes
          </div>
        )}
      </div>
    </div>
  );
}
