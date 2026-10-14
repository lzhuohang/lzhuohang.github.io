---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

# 🤵🏻 About me
I'm a Ph.D. student of [Department of Electronic Engineering](https://www.ee.tsinghua.edu.cn/), [Tsinghua University](https://www.tsinghua.edu.cn/) specializing in **Electronic Information**. My research interest includes:
- **Large Language Models**
- **World Models**
- **World Action Models**
- **Agent**

I'm very fortunate to be advised by [Prof.Yong Li](https://scholar.google.com/citations?&user=kmgzPeQAAAAJ) and be a member of [FIB LAB](https://fi.ee.tsinghua.edu.cn/).



# 🔥 News
- **2026.08**: &nbsp;🎉🎉 One paper as first co-author was accepted by **AI Open**. 
- **2026.03**: &nbsp;🎉🎉 One paper as co-author was accepted by **IEEE Internet of Things Journal**. 


# 📝 Publications

<div class="publication-list">
  <div class="publication-entry">
    <a class="publication-figure" href="{{ '/images/papers/uniwam-overview.png' | relative_url }}" aria-label="View UniW(A)M overview">
      <img src="{{ '/images/papers/uniwam-overview.png' | relative_url }}" alt="UniW(A)M overview" loading="lazy" decoding="async">
    </a>
    <div class="publication-text">
      <p class="publication-title"><a href="https://arxiv.org/abs/2610.18697">UniW(A)M: A Unified Mixture-of-Experts Framework for World and World-Action Models</a></p>
      <p class="publication-authors">Jingbo Xu&#42;, Jianjie Fang&#42;, <strong>Zhuohang Li</strong>, Zihao Song, Zhaolu Wang, Xvyuan Liu, Xin Zhang, Haisheng Su, Yinzhou Tang, Chen Gao<sup>†</sup>, Wei Wu, Yong Li<sup>†</sup></p>
      <p class="publication-venue">Arxiv</p>
    </div>
  </div>
  <div class="publication-entry">
    <a class="publication-figure" href="{{ '/images/papers/caer-overview.png' | relative_url }}" aria-label="View CAER overview">
      <img src="{{ '/images/papers/caer-overview.png' | relative_url }}" alt="CAER overview" loading="lazy" decoding="async">
    </a>
    <div class="publication-text">
      <p class="publication-title"><a href="https://arxiv.org/abs/2608.30897">CAER: Causal Action Effect Reweighting for World Model Training</a></p>
      <p class="publication-authors">Jianjie Fang&#42;, Xvyuan Liu&#42;, Ziyou Wang, Rongze Tang, Zhaolu Wang, <strong>Zhuohang Li</strong>, Xin Zhang, Haisheng Su, Chen Gao<sup>†</sup>, Wei Wu, Xinlei Chen<sup>†</sup>, Yong Li<sup>†</sup></p>
      <p class="publication-venue">Arxiv</p>
    </div>
  </div>
  <div class="publication-entry">
    <a class="publication-figure" href="{{ '/images/papers/worldarena-2-overview.png' | relative_url }}" aria-label="View WorldArena 2.0 overview">
      <img src="{{ '/images/papers/worldarena-2-overview.png' | relative_url }}" alt="WorldArena 2.0 overview" loading="lazy" decoding="async">
    </a>
    <div class="publication-text">
      <p class="publication-title"><a href="https://arxiv.org/abs/2605.17912">WorldArena 2.0: Extending Embodied World Model Benchmarking on Modality, Functionality and Platform</a></p>
      <p class="publication-authors">Yu Shang&#42;, Yinzhou Tang&#42;, Yiding Ma&#42;, <strong>Zhuohang Li</strong>&#42;, Lei Jin&#42;, Weikang Su&#42;, Xin Jin, Zhaolu Wang, Ziyou Wang, Xin Zhang, Haisheng Su, Weizhen He, Wei Wu, Haoyi Duan, Gordon Wetzstein, Xihui Liu, Dhruv Shah, Zhaoxiang Zhang, Zhibo Chen, Jun Zhu, Yonghong Tian, Tat-Seng Chua, Wenwu Zhu, Chen Gao, Yong Li<sup>†</sup></p>
      <p class="publication-venue">Arxiv</p>
    </div>
  </div>
  <div class="publication-entry">
    <a class="publication-figure" href="{{ '/images/papers/worldarena-framework.png' | relative_url }}" aria-label="View WorldArena functional evaluation framework">
      <img src="{{ '/images/papers/worldarena-framework.png' | relative_url }}" alt="WorldArena functional evaluation framework" loading="lazy" decoding="async">
    </a>
    <div class="publication-text">
      <p class="publication-title"><a href="https://www.sciencedirect.com/science/article/pii/S2666651026000136">WorldArena: A Unified Benchmark for Evaluating Perception and Functional Utility of Embodied World Models</a></p>
      <p class="publication-authors">Yu Shang&#42;, <strong>Zhuohang Li</strong>&#42;, Yiding Ma&#42;, Weikang Su&#42;, Xin Jin&#42;, Ziyou Wang&#42;, Lei Jin, Xin Zhang, Yinzhou Tang, Haisheng Su, Chen Gao, Wei Wu, Xihui Liu, Dhruv Shah, Zhaoxiang Zhang, Zhibo Chen, Jun Zhu, Yonghong Tian, Tat-Seng Chua, Wenwu Zhu, Yong Li<sup>†</sup></p>
      <p class="publication-venue">AI Open</p>
    </div>
  </div>
  <div class="publication-entry">
    <a class="publication-figure" href="{{ '/images/papers/robust-localization-factor-graph.png' | relative_url }}" aria-label="View Traditional and RAS factor graph models">
      <img src="{{ '/images/papers/robust-localization-factor-graph.png' | relative_url }}" alt="Traditional and RAS factor graph models" loading="lazy" decoding="async">
    </a>
    <div class="publication-text">
      <p class="publication-title"><a href="https://ieeexplore.ieee.org/document/11435433">Robust Localization based on Regularization with Adaptive Scaling: Model, Algorithm and Application</a></p>
      <p class="publication-authors">Weixiang Chen, Tengfei Wang&#42;, <strong>Zhuohang Li</strong>, Mingquan Lu</p>
      <p class="publication-venue">IEEE Iotj</p>
    </div>
  </div>
</div>

# 🏆 Competition Awards
- **Third Prize(5th Place)** The 6th Intelligent Unmanned Aerial Vehicle Challenge in Tsinghua University, **2024.12**
- **First Prize** The 39th National Physics Competition for College Students in Beijing, **2023.12**
- **Second Prize** The 22th Contemporary Undergraduate Mathematical Contest in Modeling in Beijing, **2023.09**


# 🥇 Scholarships and Honors
- **2026.06** Excellent Graduate of Tsinghua University (Undergraduate) (top 15%)
- **2025.12** Outstanding Student Leader Award of Tsinghua University Student Association of Science and Technology
- **2025.11** Comprehensive Excellence Scholarship of Tsinghua University
- **2024.11** Outstanding Student Leader Award of Tsinghua University Student Association of Science and Technology
- **2024.11** Outstanding Volunteer Service Scholarship of Tsinghua University


# 📖 Educations
- **2022.08 - 2026.06**, B.S. in Department of Electronic Engineering, Tsinghua University
- **2026.08 -&nbsp;&nbsp;&nbsp; now**,&nbsp;&nbsp;&nbsp; Ph.D. in Department of Electronic Engineering, Tsinghua University 



# 💻 Internships
- **2025.10 - now**,  [manifold-ai](https://manifoldai.cn/), Beijing,China.
- **2025.7 - 2025.8**,  [kisilicon](https://www.kisilicon.com/), Beijing,China.

