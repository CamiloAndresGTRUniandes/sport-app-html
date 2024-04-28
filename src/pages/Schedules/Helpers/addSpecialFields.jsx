import { addHours } from "date-fns";

export const addSpecialFields = (events, userId, name) => {


  
  return events.map(elem => {
    const event = {
      title: elem.name,
      notes: elem.name.length+ elem.description.length>15 ? `${elem.description.substring(0, 12)} ...`: elem.description,
      description: elem.description,
      start:addHours(new Date(elem.startDateTime) ,0),
      end: addHours(new Date(elem.endDateTime),0 ),
      bgColor: "red",
      className: "event",
      picture:elem.picture,
      productId: elem.productId,
      name: elem.name,
      categoryId: elem.category.id,
      categoryName: elem.category.name,
      userId:userId,
      planId: elem.plan.id,
      planName: elem.plan.name,
      startDateTime: new Date(elem.startDateTime),
      endDateTime: new Date(elem.endDateTime),
      user: {
        _id: userId,
        name: name,
      },
    };
  
    return event;
  });
};