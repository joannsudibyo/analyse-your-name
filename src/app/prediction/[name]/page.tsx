const getPredictedAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io/?name=${name}`);
  return res.json();
};

const getPredictedGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io/?name=${name}`);
  return res.json();
};

const getPredictedCountry = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io/?name=${name}`);
  return res.json();
};

const getCountTotal = async (name: string) => {
  const res = await fetch(`https://api.agify.io/?name=${name}`);
  return res.json();
};

const getCountryName = async (countryId: string) => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/alpha/${countryId}?fields=name`
      );
  
      // Check if the response status is 400
      if (res.status === 400) {
        // Return an empty string if the response status is 400
        return 'N/A';
      }
  
      const data = await res.json();
      return data.name.common;
    } catch (error) {
      console.error('Error fetching country name:', error);
      return 'Not Available'; // Return an empty string in case of any other error
    }
  };

interface apiParam {
  params: { name: string };
}

interface CountryInfo {
  country_id: string;
  probability: number;
}

export default async function Page({ params }: apiParam) {
  const ageData = getPredictedAge(params.name);
  const genderData = getPredictedGender(params.name);
  const countryData = getPredictedCountry(params.name);
  const totalCount = getCountTotal(params.name);

  const [age, gender, country, count] = await Promise.all([
    ageData,
    genderData,
    countryData,
    totalCount,
  ]);

  // Display the country ID and its corresponding name
  const countryIds = (
    country?.country.map(
      (countryInfo: CountryInfo) => countryInfo.country_id
    ) || []
  )
    .join(" ")
    .split(" ");

  const countriesNames: string[] = [];
  const fetchCountryNames = async () => {
    for (const countryId of countryIds) {
      const countryName = await getCountryName(countryId);
      countriesNames.push(countryName);
    }
  };

  await fetchCountryNames();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-12 shadow-md bg-gray-100 rounded-md">
      <h1 className="text-3xl text-center font-semibold mb-8 text-black"> Name Analyser</h1>
      
        <div className="text-1xl text-black"> Age: {age?.age} </div>
        <div className="text-1xl text-black">
          Nationalities:
          <ul>
            {country?.country.map((countryInfo: CountryInfo, index: number) => (
              <li key={index}>
                {countryInfo.country_id} ({countriesNames[index]}) -
                Probability: {(countryInfo.probability * 100).toFixed(2)}%
              </li>
            ))}
          </ul>
        </div>
        <div className="text-1xl text-black">
          {" "}
          How many people have this name: {count?.count}
        </div>
      </div>
    </div>
  );
}
