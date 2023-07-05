// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
//
// const MarksByTermAndMidterm = () => {
//     const [marksData, setMarksData] = useState([]);
//
//     useEffect(() => {
//         fetchMarksByTermAndMidterm();
//     }, []);
//
//     const fetchMarksByTermAndMidterm = async () => {
//         try {
//             const response = await axios.get(
//                 'http://localhost:3000/api/v1/marks/allmarks/for/student/allterms/midterms/906342be-defb-486a-9f09-c196b82ff71f'
//             );
//             setMarksData(response.data);
//         } catch (error) {
//             console.error(error);
//         }
//     };
//
//     return (
//         <div className="container mx-auto py-6">
//             {marksData.map((termData) => (
//                 <div key={termData.termName} className="mb-6">
//                     <h2 className="text-2xl font-semibold">{termData.termName}</h2>
//                     {termData.midterms.map((midtermData) => (
//                         <div key={midtermData.midtermId} className="mb-4">
//                             <h3 className="text-lg font-semibold">{midtermData.midtermName}</h3>
//                             <table className="w-full border border-gray-300 mt-2">
//                                 <thead>
//                                 <tr className="bg-gray-100">
//                                     <th className="py-2 px-4 border-b">Course</th>
//                                     <th className="py-2 px-4 border-b">CAT1</th>
//                                     <th className="py-2 px-4 border-b">CAT2</th>
//                                     <th className="py-2 px-4 border-b">Exam</th>
//                                     <th className="py-2 px-4 border-b">Total</th>
//                                     <th className="py-2 px-4 border-b">Grade</th>
//                                     <th className="py-2 px-4 border-b">Position</th>
//                                     <th className="py-2 px-4 border-b">Teacher</th>
//                                 </tr>
//                                 </thead>
//                                 <tbody>
//                                 {midtermData.markDetails.map((mark) => (
//                                     <tr key={mark.courseId} className="border-b">
//                                         <td className="py-2 px-4">{mark.courseName}</td>
//                                         <td className="py-2 px-4">{mark.cat1}</td>
//                                         <td className="py-2 px-4">{mark.cat2}</td>
//                                         <td className="py-2 px-4">{mark.exam}</td>
//                                         <td className="py-2 px-4">{mark.total}</td>
//                                         <td className="py-2 px-4">{mark.grade}</td>
//                                         <td className="py-2 px-4">{mark.position}</td>
//                                         <td className="py-2 px-4">{mark.user}</td>
//                                     </tr>
//                                 ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     ))}
//                 </div>
//             ))}
//         </div>
//     );
// };
//
// export default MarksByTermAndMidterm;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
//
// const MarksByTermAndMidterm = () => {
//     const [marksData, setMarksData] = useState([]);
//
//     useEffect(() => {
//         fetchMarksByTermAndMidterm();
//     }, []);
//
//     const fetchMarksByTermAndMidterm = async () => {
//         try {
//             const response = await axios.get('http://localhost:3000/api/v1/marks/allmarks/for/student/906342be-defb-486a-9f09-c196b82ff71f');
//             const { marks } = response.data;
//
//             const mappedData = marks.reduce((acc, mark) => {
//                 const { Term, Midterm, ...markDetails } = mark;
//
//                 const termName = Term.name;
//                 const midtermName = Midterm.name;
//
//                 if (!acc[termName]) {
//                     acc[termName] = {};
//                 }
//
//                 if (!acc[termName][midtermName]) {
//                     acc[termName][midtermName] = [];
//                 }
//
//                 acc[termName][midtermName].push(markDetails);
//
//                 return acc;
//             }, {});
//
//             setMarksData(mappedData);
//         } catch (error) {
//             console.error(error);
//         }
//     };
//
//     return (
//         <div>
//             {Object.entries(marksData).map(([term, midterms]) => (
//                 <div key={term}>
//                     <h2>{term}</h2>
//                     {Object.entries(midterms).map(([midterm, marks]) => (
//                         <div key={midterm}>
//                             <h3>{midterm}</h3>
//                             <table>
//                                 <thead>
//                                 <tr>
//                                     <th>Course</th>
//                                     <th>CAT1</th>
//                                     <th>CAT2</th>
//                                     <th>Exam</th>
//                                     <th>Total</th>
//                                     <th>Grade</th>
//                                     <th>Position</th>
//                                     <th>Teacher</th>
//                                     <th>Student Name</th>
//                                     <th>Student Second Name</th>
//                                     <th>Student Position</th>
//                                     <th>Annual Total Average</th>
//                                     <th>Annual Total Grade</th>
//                                     <th>Average Marks</th>
//                                     <th>Average Grade</th>
//                                     <th>Deliberation</th>
//                                     <th>Class Name</th>
//                                 </tr>
//                                 </thead>
//                                 <tbody>
//                                 {marks.map((mark) => (
//                                     <tr key={mark.id}>
//                                         <td>{mark.Course.name}</td>
//                                         <td>{mark.cat1}</td>
//                                         <td>{mark.cat2}</td>
//                                         <td>{mark.exam}</td>
//                                         <td>{mark.total}</td>
//                                         <td>{mark.grade}</td>
//                                         <td>{mark.position}</td>
//                                         <td>{mark.User.fullname}</td>
//                                         <td>{mark.Student.name}</td>
//                                         <td>{mark.Student.secondname}</td>
//                                         <td>{mark.Student.position}</td>
//                                         <td>{mark.Student.annualtotalAverage}</td>
//                                         <td>{mark.Student.annualtotalGrade}</td>
//                                         <td>{mark.Student.averageMarks}</td>
//                                         <td>{mark.Student.averageGrade}</td>
//                                         <td>{mark.Student.deliberation}</td>
//                                         <td>{mark.Student.Class.name}</td>
//                                     </tr>
//                                 ))}
//                                 </tbody>
//                             </table>
//                             {response.data.mark.Student.name}
//                         </div>
//                     ))}
//                 </div>
//             ))}
//         </div>
//     );
// };
//
// export default MarksByTermAndMidterm;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MarksByTermAndMidterm = () => {
    const [marksData, setMarksData] = useState([]);


    useEffect(() => {
        fetchMarksByTermAndMidterm();
    }, []);

    const fetchMarksByTermAndMidterm = async () => {
        try {
            const response = await axios.get(
                'http://localhost:3000/api/v1/marks/allmarks/for/student/906342be-defb-486a-9f09-c196b82ff71f'
            );
            const  marks  = response.data.marks;

            const mappedData = marks.reduce((acc, mark) => {
                const { Term, Midterm, ...markDetails } = mark;

                const termName = Term.name;
                const midtermName = Midterm.name;

                if (!acc[termName]) {
                    acc[termName] = {};
                }

                if (!acc[termName][midtermName]) {
                    acc[termName][midtermName] = [];
                }

                acc[termName][midtermName].push(markDetails);

                return acc;
            }, {});

            setMarksData(mappedData);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            {Object.entries(marksData).map(([term, midterms]) => (
                <div key={term} className="mb-4">
                    <h2 className="text-xl font-bold mb-2">{term}</h2>
                    {Object.entries(midterms).map(([midterm, marks]) => (
                        <div key={midterm} className="mb-4">
                            <h3 className="text-lg font-bold mb-2">{midterm}</h3>
                            <table className="table-auto w-full">
                                <thead>
                                <tr>
                                    <th className="px-4 py-2">Course</th>
                                    <th className="px-4 py-2">CAT1</th>
                                    <th className="px-4 py-2">CAT2</th>
                                    <th className="px-4 py-2">Exam</th>
                                    <th className="px-4 py-2">Total</th>
                                    <th className="px-4 py-2">Grade</th>
                                    <th className="px-4 py-2">Position</th>
                                    <th className="px-4 py-2">Teacher</th>
                                    <th className="px-4 py-2">Student Name</th>
                                    <th className="px-4 py-2">Student Second Name</th>
                                    <th className="px-4 py-2">Student Position</th>
                                    <th className="px-4 py-2">Annual Total Average</th>
                                    <th className="px-4 py-2">Annual Total Grade</th>
                                    <th className="px-4 py-2">Average Marks</th>
                                    <th className="px-4 py-2">Average Grade</th>
                                    <th className="px-4 py-2">Deliberation</th>
                                    <th className="px-4 py-2">Class Name</th>
                                </tr>
                                </thead>
                                <tbody>
                                {marks.map((mark) => (
                                    <tr key={mark.id}>
                                        <td className="px-4 py-2">{mark.Course.name}</td>
                                        <td className="px-4 py-2">{mark.cat1}</td>
                                    <td className="px-4 py-2">{mark.cat2}</td>
                                <td className="px-4 py-2">{mark.exam}</td>
                                <td className="px-4 py-2">{mark.total}</td>
                                <td className="px-4 py-2">{mark.grade}</td>
                                <td className="px-4 py-2">{mark.position}</td>
                                <td className="px-4 py-2">{mark.User.fullname}</td>
                                <td className="px-4 py-2">{mark.Student.name}</td>
                                <td className="px-4 py-2">{mark.Student.secondname}</td>
                                <td className="px-4 py-2">{mark.Student.position}</td>
                                <td className="px-4 py-2">{mark.Student.annualtotalAverage}</td>
                                <td className="px-4 py-2">{mark.Student.annualtotalGrade}</td>
                                <td className="px-4 py-2">{mark.Student.averageMarks}</td>
                                <td className="px-4 py-2">{mark.Student.averageGrade}</td>
                                <td className="px-4 py-2">{mark.Student.deliberation}</td>
                                <td className="px-4 py-2">{mark.Student.Class.name}</td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                        </div>
                        ))}
                </div>
            ))}
            <div>
                <h1>Student Name</h1>
                {/*{marks.student.name}*/}
            </div>
</div>
);
};

export default MarksByTermAndMidterm;


