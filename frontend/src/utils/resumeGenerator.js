import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import myAvatar from '../assets/images/mee.png';

export const generateResumePDF = (data) => {
  const doc = new jsPDF();
  const primaryColor = [255, 219, 112]; // #ffdb70 (Yellow)
  const darkColor = [30, 30, 31];      // #1e1e1f (Dark)

  // 1. Header Background
  doc.setFillColor(...darkColor);
  doc.rect(0, 0, 210, 50, 'F');

  // 2. Add Avatar Image (Circular effect)
  try {
    // Parameters: image, type, x, y, width, height
    doc.addImage(myAvatar, 'PNG', 165, 8, 32, 32); 
  } catch (e) {
    console.error("Could not load avatar in PDF:", e);
  }

  // 3. Name & Title
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.text("GAURAV THAKUR", 20, 22);
  
  doc.setTextColor(...primaryColor);
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text("Web Developer & Data Scientist", 20, 32);

  // 4. Contact Info (Left Aligned under title)
  doc.setTextColor(200, 200, 200);
  doc.setFontSize(9);
  doc.text("thakurgauravkr@gmail.com  |  +91 8595109337  |  New Delhi, India", 20, 40);

  // 4.1 Social Links
  doc.setTextColor(...primaryColor);
  doc.setFontSize(8);
  const socialLinks = "LinkedIn: linkedin.com/in/gaurav-kumar-thakur-2292193a5/  |  GitHub: github.com/grv-galaxy  |  Instagram: @_gaurav_.k.u.ma.r";
  doc.text(socialLinks, 20, 46);

  // 5. Education Section
  let currentY = 65;
  doc.setTextColor(...darkColor);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("EDUCATION", 20, currentY);
  doc.setDrawColor(...primaryColor);
  doc.setLineWidth(1);
  doc.line(20, currentY + 2, 45, currentY + 2);

  currentY += 12;
  data.education.forEach(edu => {
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica", "bold");
    doc.text(edu.title, 20, currentY);
    
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.text(edu.date, 190, currentY, { align: "right" });
    
    currentY += 6;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(60, 60, 60);
    const desc = doc.splitTextToSize(edu.desc, 170);
    doc.text(desc, 20, currentY);
    currentY += (desc.length * 5) + 7;
  });

  // 6. Experience Section
  currentY += 5;
  doc.setTextColor(...darkColor);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("EXPERIENCE", 20, currentY);
  doc.line(20, currentY + 2, 45, currentY + 2);

  currentY += 12;
  data.experience.forEach(exp => {
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica", "bold");
    doc.text(exp.title, 20, currentY);
    
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.text(exp.date, 190, currentY, { align: "right" });
    
    currentY += 6;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(60, 60, 60);
    const desc = doc.splitTextToSize(exp.desc, 170);
    doc.text(desc, 20, currentY);
    currentY += (desc.length * 5) + 7;
  });

  // 7. Projects Section
  currentY += 5;
  if (data.projects && data.projects.length > 0) {
    doc.setTextColor(...darkColor);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("FEATURED PROJECTS", 20, currentY);
    doc.line(20, currentY + 2, 70, currentY + 2);

    currentY += 12;
    data.projects.forEach(project => {
      doc.setFontSize(11);
      doc.setTextColor(0, 0, 0);
      doc.setFont("helvetica", "bold");
      doc.text(project.title, 20, currentY);
      
      currentY += 5;
      doc.setFontSize(9);
      doc.setTextColor(30, 144, 255); // Dodger Blue for links
      doc.text(project.link, 20, currentY);
      
      currentY += 5;
      doc.setFont("helvetica", "normal");
      doc.setTextColor(60, 60, 60);
      const desc = doc.splitTextToSize(project.description, 170);
      doc.text(desc, 20, currentY);
      currentY += (desc.length * 5) + 6;
    });
  }

  // 8. Skills Table (FIXED: Calling autoTable directly)
  autoTable(doc, {
    startY: currentY + 10,
    head: [['Technical Skills', 'Proficiency']],
    body: data.skills.map(s => [s.name, `${s.value}%`]),
    headStyles: { fillColor: darkColor, textColor: primaryColor, fontStyle: 'bold' },
    styles: { fontSize: 10, cellPadding: 3 },
    theme: 'grid',
    margin: { left: 20, right: 20 }
  });

  // Save the PDF
  doc.save("Gaurav_Thakur_Resume.pdf");
};