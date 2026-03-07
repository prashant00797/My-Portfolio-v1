//dependency
import React from "react";
import { map } from "lodash";
import { Image } from "react-shimmer";

//local dependency
import { MajorProjects } from "../../Data/constant";

//css imports
import "./work.scss";
import { Spinner } from "../../Modules/Spinner/Spinner";

const mapLinks = (link) => {
  return (
    <div key={link.id} className="ui-work__wrapper__linkWrapper__links">
      <a
        href={link.url}
        className={`ui-work__wrapper__linkWrapper__links--${link.classname}`}
        target="_blank"
        rel="noreferrer nofollow"
      >
        {link.linkTitle}
      </a>
    </div>
  );
};

const mapProjects = (project) => {
  return (
    <>
      <div className="ui-work__wrapper__imageWrapper">
        <Image
          src={project.projectImageUrl}
          alt={project.projectTitle}
          className="ui-work__wrapper__imageWrapper__image"
          fallback={<Spinner />}
        />
      </div>
      <div className="ui-work__wrapper__descriptionWrapper">
        <h3 className="ui-work__wrapper__descriptionWrapper__title">
          {project.projectTitle}
        </h3>
        <p className="ui-work__wrapper__descriptionWrapper__description">
          {project.projectDescription}
        </p>
        <div className="ui-work__wrapper__linkWrapper">
          {map(project.links, (link) => {
            return mapLinks(link);
          })}
        </div>
      </div>
    </>
  );
};

export const Work = () => {
  return (
    <div id="work" className="ui-work">
      {MajorProjects.map((project) => {
        return (
          <div key={project.id} className="ui-work__wrapper">
            {mapProjects(project)}
          </div>
        );
      })}
    </div>
  );
};
