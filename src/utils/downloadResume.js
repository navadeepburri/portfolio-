/**
 * Utility to reliably download Navadeep's Resume as a properly named PDF
 * across all modern browsers (Chrome, Edge, Firefox, Safari).
 */
export const downloadResume = async (e) => {
  if (e && e.preventDefault) {
    e.preventDefault();
  }

  const resumeFileName = 'Navadeep_Burri_Resume.pdf';
  const resumeUrl = `${import.meta.env.BASE_URL}${resumeFileName}`;

  try {
    const response = await fetch(resumeUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch resume: ${response.status}`);
    }
    const blob = await response.blob();
    const pdfBlob = new Blob([blob], { type: 'application/pdf' });
    const blobUrl = window.URL.createObjectURL(pdfBlob);

    const link = document.createElement('a');
    link.href = blobUrl;
    link.setAttribute('download', resumeFileName);
    document.body.appendChild(link);
    link.click();

    setTimeout(() => {
      if (document.body.contains(link)) {
        document.body.removeChild(link);
      }
      window.URL.revokeObjectURL(blobUrl);
    }, 200);
  } catch (err) {
    console.warn('Fallback to standard download navigation:', err);
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', resumeFileName);
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      if (document.body.contains(link)) {
        document.body.removeChild(link);
      }
    }, 200);
  }
};
