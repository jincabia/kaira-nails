'use client';
import { useState } from 'react';

export default function ScheduleCreator() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleCreateSchedule = async () => {
    setLoading(true);

    const scheduleData = {
      name: "Catch up hours",
      timeZone: "America/Edmonton",
      availability: [
        { days: ["Monday", "Tuesday"], startTime: "17:00", endTime: "19:00" },
        { days: ["Wednesday", "Thursday"], startTime: "16:00", endTime: "20:00" }
      ],
      isDefault: true,
      overrides: [
        { date: "2024-05-20", startTime: "18:00", endTime: "21:00" }
      ]
    };

    try {
      const res = await fetch('/api/schedules', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(scheduleData),
      });

      let data;
      const text = await res.text();

      if (text) {
        data = JSON.parse(text);
      } else {
        data = { message: 'No response body' };
      }
      console.log('Schedule response:', data);
      setResponse(data);
    } catch (err) {
      console.error('Failed to create schedule:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create Cal.com Schedule</h1>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={handleCreateSchedule}
        disabled={loading}
      >
        {loading ? 'Creating...' : 'Create Schedule'}
      </button>

      {response && (
        <pre className="mt-4 bg-gray-100 p-4 rounded text-black     ">
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </main>
  );
}
