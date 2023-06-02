import { getAllLocations } from "../../../api/location.service";
import { useEffect, useState } from "react";
import Typography from "../../../components/typography";

export default function data(userDeviceInfo) {
  const [userLocations, setUserLocations] = useState([]);

  const getAllLocation = async (userDeviceInfo) => {
    const { locations } = await getAllLocations(userDeviceInfo.token);
    setUserLocations(locations);
  };

  useEffect(() => {
    if (userDeviceInfo != null) {
      getAllLocation(userDeviceInfo);
    }
  }, []);

  const rowLocationInfo = (
    addressLines,
    adminArea,
    countryCode,
    createdAt,
    currentTime,
    featureName,
    latitude,
    longitude,
    locality,
    subAdminArea,
    thoroughfare
  ) => {
    return {
      addressLines: (
        <Typography
          component="a"
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          {addressLines}
        </Typography>
      ),
      featureName: (
        <Typography
          component="a"
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          {featureName}
        </Typography>
      ),
      locality: (
        <Typography
          component="a"
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          {locality}
        </Typography>
      ),
      adminArea: (
        <Typography
          component="a"
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          {adminArea}
        </Typography>
      ),
      subAdminArea: (
        <Typography
          component="a"
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          {subAdminArea}
        </Typography>
      ),
      coordinates: (
        <Typography
          component="a"
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          {latitude} , {longitude}
        </Typography>
      ),
      countryCode: (
        <Typography
          component="a"
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          {countryCode}
        </Typography>
      ),
      createdAt: (
        <Typography
          component="a"
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          {createdAt}
        </Typography>
      ),
      currentTime: (
        <Typography
          component="a"
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          {currentTime}
        </Typography>
      ),
      thoroughfare: (
        <Typography
          component="a"
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          {thoroughfare}
        </Typography>
      ),
    };
  };

  const rowComplete = () => {
    const rowLocation = [];
    userLocations.map(
      ({
        addressLines,
        adminArea,
        countryCode,
        createdAt,
        currentTime,
        featureName,
        latitude,
        longitude,
        locality,
        subAdminArea,
        thoroughfare,
      }) => {
        rowLocation.push(
          rowLocationInfo(
            addressLines,
            adminArea,
            countryCode,
            createdAt,
            currentTime,
            featureName,
            latitude,
            longitude,
            locality,
            subAdminArea,
            thoroughfare
          )
        );
      }
    );
    return rowLocation;
  };

  return {
    columns: [
      {
        Header: "addressLines",
        accessor: "addressLines",
        width: "45%",
        align: "left",
      },
      { Header: "featureName", accessor: "featureName", align: "center" },
      { Header: "locality", accessor: "locality", align: "center" },
      { Header: "adminArea", accessor: "adminArea", align: "center" },
      { Header: "subAdminArea", accessor: "subAdminArea", align: "center" },
      { Header: "coordinates", accessor: "coordinates", align: "center" },
      { Header: "countryCode", accessor: "countryCode", align: "center" },
      { Header: "createdAt", accessor: "createdAt", align: "center" },
      { Header: "currentTime", accessor: "currentTime", align: "center" },
      { Header: "thoroughfare", accessor: "thoroughfare", align: "center" },
    ],
    rows: rowComplete(),
  };
}
