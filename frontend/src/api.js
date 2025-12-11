const API_BASE_URL = 'https://ws1-proj.onrender.com';

export async function fetchProjects() {
  const response = await fetch(`${API_BASE_URL}/api/projects`);
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  return response.json();
}

  export async function fetchskills() {
  const response = await fetch(`${API_BASE_URL}/api/skills`);
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    return response.json();
  }

// export async function fetchCertifications() {
//   const response = await fetch(`${API_BASE_URL}/api/certifications`);
//   if (!response.ok) {
//     throw new Error('Failed to fetch projects');
//   }
//   return response.json();

// }
