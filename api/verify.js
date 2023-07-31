import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  // Get the JWT from the query parameters
  const token = req.query.token;

  // Verify the JWT
  try {
    const decoded = jwt.verify(token, 'ei-uae@123');
    // Extract the desired query parameters from the decoded payload
    const { id, status, companyName, noOfEmployees } = decoded;

    // Handle the extracted data as needed
    console.log('id:', id);
    console.log('status:', status);
    console.log('companyName:', companyName);
    console.log('noOfEmployees:', noOfEmployees);

    // Send a response indicating successful verification
    res.status(200).end();
  } catch (error) {
    console.error('JWT verification failed:', error);
    res.status(500).json({ error: 'JWT verification failed' });
  }
}
