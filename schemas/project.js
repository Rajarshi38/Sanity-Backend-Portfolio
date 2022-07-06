export default {
  name: "project",
  type: "document",
  title: "Project",
  fields: [
    {
      name: "projectTitle",
      type: "string",
      title: "ProjectTitle",
      validation: (rule) => rule.required(),
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      validation: (rule) => rule.required(),
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      validation: (rule) => rule.required(),
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "projectTitle",
        maxLength: 200,
      },
    },
    {
      name: "github",
      title: "Github Link",
      type: "url",
      validation: (rule) => rule.required(),
    },
    {
      name: "live",
      title: "Website",
      type: "url",
      validation: (rule) => rule.required(),
    },
    {
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "priority",
      title: "Priority",
      type: "number",
    },
  ],
};
