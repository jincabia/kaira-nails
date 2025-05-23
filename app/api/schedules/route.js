// app/api/schedules/route.js
export async function GET() {
    // const CAL_API_VERSION = '2024-06-11';
    // const AUTHORIZATION = process.env.CAL_API_KEY; // Store your API key in .env.local
  
    try {
      const response = await fetch('https://api.cal.com/v2/schedules', {
        method: 'GET',
        headers: {
          'cal-api-version': '2024-06-11',
          'Authorization': 'cal_live_f1ff452d4f07d4d86377ebca985e40d2',
        },
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        return new Response(JSON.stringify({ error: data }), { status: response.status });
      }
  
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error('Fetch error:', error);
      return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
  }

  export async function POST(req) {
    const CAL_API_VERSION = '2024-06-11';
    const AUTHORIZATION = 'cal_live_f1ff452d4f07d4d86377ebca985e40d2';
  
    try {
      const body = await req.json();
  
      const response = await fetch('https://api.cal.com/v2/schedules', {
        method: 'POST',
        headers: {
          'Authorization': AUTHORIZATION,
          'cal-api-version': CAL_API_VERSION,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
  
      // Handle empty response
      const text = await response.text();
      const data = text ? JSON.parse(text) : {};
  
      if (!response.ok) {
        return new Response(JSON.stringify({ error: data }), { status: response.status });
      }
  
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error('Fetch error:', error);
      return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
  }

// const options = {
//     method: 'POST',
//     headers: {
//       Authorization: 'cal_live_f1ff452d4f07d4d86377ebca985e40d2',
//       'cal-api-version': '2024-06-11',
//       'Content-Type': 'application/json'
//     },
//     body: 
// '{"name":"Catch up hours","timeZone":"Europe/Rome","availability":[{"days":["Monday","Tuesday"],"startTime":"17:00","endTime":"19:00"},{"days":["Wednesday","Thursday"],"startTime":"16:00","endTime":"20:00"}],"isDefault":true,"overrides":[{"date":"2024-05-20","startTime":"18:00","endTime":"21:00"}]}'
//   };
  
//   fetch('https://api.cal.com/v2/schedules', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));