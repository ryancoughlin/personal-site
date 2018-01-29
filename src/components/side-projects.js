import React from 'react'
import Helmet from 'react-helmet'
import './index.css'

const SideProjects = () => <div>

<h2>For example</h2>
<div class="side-projects">
    <div class="side-project <%= side_project.name.downcase %>">
      <div class="project-housing">
        <%= tag :img, :src => "images/icon/#{side_project.icon}" %>
        <h2><%= side_project.name %></h2>
        <p>
          <%= side_project.description %>
        </p>
      </div>
    </div>
</div>

</div>

export default SideProjects
