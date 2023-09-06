'use client'
 
import { useSearchParams } from 'next/navigation'
import { useState } from 'react';
const QRCode = require('qrcode');
export default function Login() {
  const searchParams = useSearchParams()
  const search = searchParams.get('email')
  const [first, setfirst] = useState("");
  const [out, setOut] = useState("");
  const createQr = (value:string) =>{
    let host = 'https://'+window.location.host+'/about/'+value;
    QRCode.toDataURL(host)
  .then((url:any) => {
    console.log(url);
    value=="in/"?setfirst(url):setOut(url);
  })
  .catch((err:any) => {
    console.error(err)
  })
  }

  // URL -> `/dashboard?search=my-project`
  // `search` -> 'my-project'
  if(search=="Admin"||search=="Abhishesh"||search=="Neelesh"){
    return <>
    <h1 className='mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl dark:text-white'>Authenicated user: {search}</h1>    
<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Member Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Date of joining
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone Number
                </th>
                <th scope="col" className="px-6 py-3">
                    Membership Status
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Vipin Mishra
                </th>
                <td className="px-6 py-4">
                    01/08/2023
                </td>
                <td className="px-6 py-4">
                    8962424011
                </td>
                <td className="px-6 py-4">
                    Active
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Ajith
                </th>
                <td className="px-6 py-4">
                    14/04/2023
                </td>
                <td className="px-6 py-4">
                    9174804077
                </td>
                <td className="px-6 py-4">
                    Active
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Tanmay
                </th>
                <td className="px-6 py-4">
                    04/02/2023
                </td>
                <td className="px-6 py-4">
                    9752320737
                </td>
                <td className="px-6 py-4">
                    Expired
                </td>
            </tr>
        </tbody>
    </table>
</div>
<br></br>
<div style={{display:"flex",justifyContent:"space-between"}}>
<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" onClick={()=>createQr('in/')}>
<a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Create IN QR Code</h5>
</a>
{first==""?null:<img src={first}/>}
</div>

<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" onClick={()=>createQr('out/')} >
<a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Create Out QR Code</h5>
</a>
{out==""?null:<img src={out}/>}
</div>
</div>
    </>
  }
  else{
    return <h1>Bad Request</h1>
  }
}