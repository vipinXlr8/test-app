export default function LogOutId({params }:any) {
  const phoneBook: { [key: string]: string } = {
      "Vipin": "8962424011",
      "Ajith": "9174804077",
      "Tanmay": "9752320737",
      "Neelesh": "9516187046",
      "Malik":"9827852999",
      "Test":"12345"
    };
    
    const searchValue: string = params.id; // The value you want to search for
    
    // Iterate through the object's properties to find the key
    let foundKey: string | null = null;
    
    for (const key in phoneBook) {
      if (phoneBook[key] === searchValue) {
        foundKey = key;
        break; // Stop searching once the key is found
      }
    }
    const currentTime: Date = new Date();
    if (foundKey !== null) {
      return(
          <>
          <div>
              
  <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10">
          <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDM2Ni4zNCAzNjYuMzQiIGlkPSJMYXllcl8xIiBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMwMDIxNGU7fS5jbHMtMntmaWxsOiM4NDUxNjE7fS5jbHMtM3tmaWxsOiM2OTMwM2E7fS5jbHMtNHtmaWxsOm5vbmU7c3Ryb2tlOiMwMDIxNGU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fS5jbHMtNXtmaWxsOiNmZjI2MDk7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5BcnRib2FyZHNfRGl2ZXJzaXR5X0F2YXRhcnNfYnlfTmV0Z3VydTwvdGl0bGU+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTE4LjcyLDE2Ni44Yy0xLjU3LTMuMTItMy4wOS02LjI4LTQuNTUtOS40NS0yLjg2LTYuMi01LjU0LTEyLjU1LTYuNzQtMTkuMjctMy44OS0yMS42OCw3LjMyLTQ1LjMyLDIzLjQxLTU5LjIyLDIyLjktMTkuNzcsNTUuMzQtMjcuMjQsODAuNTctNDQuNzhhMzQuNTksMzQuNTksMCwwLDEtMTIuOSwyMS43NmMxMS44MS05LjEsNDcsNS44OSw1OCwxMS41MWExMTYuMywxMTYuMywwLDAsMSw0NC45NCw0MC4wOCw3My44Nyw3My44NywwLDAsMC0zNy41MS00LjhjOS44OCw5LjU3LDIwLjE2LDE5Ljc4LDIzLjksMzNDMjcwLjExLDEyMi44NSwyNDEuOCwxMjksMjMxLDE0OC4wNWMtNi45MywxMi4yLTYuODMsMjcuMDYtMTEsNDAuNDctNC40LDE0LjItMTYuMjcsMjMuMjItMzAuMjMsMjctMTAuNTIsMi44OC0zMS4yMiw0LjE4LTQwLjc1LTItMi44OS0xLjg3LTUtNC43My02Ljk0LTcuNTVBMzE4Ljg3LDMxOC44NywwLDAsMSwxMTguNzIsMTY2LjhaIi8+PGNpcmNsZSBjbGFzcz0iY2xzLTIiIGN4PSIxMjkuNzUiIGN5PSIxNzAuNzciIHI9IjE3Ii8+PGNpcmNsZSBjbGFzcz0iY2xzLTMiIGN4PSIxMzUuNjEiIGN5PSIxNjkuNzciIHI9IjE2Ii8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMjkxLjM0LDI5NGExODQuNTYsMTg0LjU2LDAsMCwxLTIyNi40OC0xbDQ4LjY2LTIyLjgxYTQ2LjgzLDQ2LjgzLDAsMCwwLDYuNjUtMy44MmMuNjQtLjQ0LDEuMjgtLjksMS44OS0xLjM4YTQ2LjM1LDQ2LjM1LDAsMCwwLDEyLjc4LTE1LjA5YzQtNy41NSw1LjMyLTE1Ljg5LDUuMzgtMjQuMzksMC0yLjgxLS4wNi01LjYzLS4xNC04LjQ1cy0uMi01LjgxLS4yMy04LjcycS0uMDYtNC43NS0uMS05LjUxbDIsMSw1LjIsMi42OSwyLjQxLjQxLDI3Ljg4LDQuNzQsMzEuMTIsNS4zLjk0LDMyLC4zOSwxMy4yOS4wNywyLjI1di4zM2wxMi4xLDQuOTJaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMjA5LjY3LDI1OC4xOWwtMS41NC4xNmE1MS40OSw1MS40OSwwLDAsMS00MC42Ny0xNC42NWwtMjcuMzgtMzMuMzRjLS4wOS0yLjktLjIuODMtLjIzLTIuMDhxLS4wNi00Ljc1LS4xLTkuNTFsMiwxLDUuMiwyLjY5LDIuNDEuNDEsMjcuODgsNC43NCwzMS4xMiw1LjMuOTQsMzJaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTM4LjQxLDEzOS4wNmExNy4xLDE3LjEsMCwwLDAtNS42NCwxMC42OWMtMi4wOSwxOS41Myw1LjE0LDQyLjU4LDcuMTUsNjIuMTRsMzYuNDIsMjYuODZhNTEuNDgsNTEuNDgsMCwwLDAsNDIuMjksOC45NGM1Ljg3LTEuMzksOS41OS0yLjI5LDEyLjI0LTcsNS4xMi05LDE3LjY5LTM5Ljc5LDE4LjUxLTYxLjUxLjIzLTYuMTcuMDgtMTUuNTctMy43Mi0yMC44Mi0xLjg1LTIuNTUtMi44LTIuNjEtMi4xMy02LjIxLjY5LTMuNzYsMS42OC03LjQ4LDIuNTEtMTEuMjFhNTIsNTIsMCwwLDAsMS0xNi40NWMtLjU1LTUtLjUzLTkuNDQtMS4wNi0xNC41My0uMjYtMi40Ny0xLjM2LTEzLjI4LTEuMzYtMTMuMjgtNi4zNSw5LjU2LTE3LjgxLDE0LjU4LTI4LjQxLDE3Ljg4LTE0LjQyLDQuNDgtMjkuNDMsNi42Ny00NC4wNSwxMC40M0MxNjIuNDcsMTI3LjUyLDE0Ni44LDEzMS4xMiwxMzguNDEsMTM5LjA2WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE4MS42MiwxNTQuMTNjNi4xLjA1LDYuMSw5LjM4LDAsOS40M2gtLjI3Yy02LjExLS4wNS02LjExLTkuMzgsMC05LjQzaC4yN1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yMzQuMzEsMTUxLjI4YzUuNjcsMCw1LjY3LDguNywwLDguNzVoLS4yNWMtNS42Ni0uMDUtNS42Ni04LjcxLDAtOC43NWguMjVaIi8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMTg2LjA5LDE5OS4wOGEyOS43NiwyOS43NiwwLDAsMCwxOC41NCw5LjY5Ii8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMTY3LjQyLDE0Mi45NGE4MC4zNCw4MC4zNCwwLDAsMSwyOC4xMy0uOCIvPjxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTIyNi40NywxNDNhNTUuNjQsNTUuNjQsMCwwLDEsMTcuNDUtMS4yMSIvPjxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTI5MS4zNCwyOTRhMTg0LjU2LDE4NC41NiwwLDAsMS0yMjYuNDgtMWw0OC42Ni0yMi44MWE0Ni44Myw0Ni44MywwLDAsMCw2LjY1LTMuODJjLjY0LS40NCwxLjI4LS45LDEuODktMS4zOCwyMy41NSwxNi43Niw1NS42OSwyNy4zMyw4My40OSwxNC44Miw2LjYyLTMsMTIuNy03Ljg0LDE2LjMtMTQuMDZaIi8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMTk4LjQyLDE4Mi4yNWEzLjQsMy40LDAsMCwwLDIuMTEsNi4zOCIvPjxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTIxMy44MywxNTMuMjFjMi40OSw5LjU1LDQuNTYsMTksNi45MywyOC41N2E3LDcsMCwwLDEsLjMsMi43MmMtLjQzLDIuNzUtMy43LDMuODgtNi40Miw0LjQ3Ii8+PC9zdmc+" alt="Bonnie image"/>
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Welcome, {foundKey}</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">your OUT time is recored</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{currentTime.toLocaleTimeString()}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">Hard workout needs a shower, and a good protein shake.</span>
      </div>
  </div>
  
          </div>
          </>
      )
    } else {
      return <><h1>You are not registered, Please Contact Admin</h1></>
    }
    
  
}