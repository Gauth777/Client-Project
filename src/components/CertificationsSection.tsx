/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, FileCheck, ShieldCheck, Microscope, CheckCircle2, ShieldCheck as VerifiedIcon } from 'lucide-react';
import { CERTIFICATIONS } from '../data';
import authorizedPhoto from '../assets/Just dial/Authorized.png';

export default function CertificationsSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Award':
        return <Award className="w-10 h-10 text-emerald-800" />;
      case 'FileCheck':
        return <FileCheck className="w-10 h-10 text-emerald-800" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-10 h-10 text-emerald-800" />;
      default:
        return <Award className="w-10 h-10 text-emerald-800" />;
    }
  };

  const labAudits = [
    {
      title: 'Moisture Capacity Auditing',
      description: 'Moisture is measured using high-frequency digital meters. We strictly enforce an optimal dry threshold (12.0% to 13.5%). This specific range preserves natural aroma and eliminates fungal mold risk, maintaining a 12 to 24 month shelf life.'
    },
    {
      title: 'Purity & Optical Sorter Photo-Analysis',
      description: 'Samples from each batch pass through computerized digital color sorters to verify optical quality. We enforce less than 1.5% chalkiness and near-zero yellow tips for pristine batch uniformity.'
    },
    {
      title: 'Batch Elongation & Thermal Cooking Test',
      description: 'Prior to bulk bagging, random rice samples are cooked in our laboratory kitchen. Technicians verify water-absorption coefficients and grain expansion to guarantee fluffy, non-sticky cooking results.'
    },
    {
      title: 'Hygiene & Clean Handling Controls',
      description: 'We strictly enforce zero artificial bleaching, zero toxic polishing agents, and complete hands-free hygienic packaging across every batch.'
    }
  ];

  return (
    <div id="certs-section-container" className="space-y-16 pb-16 font-sans">
      {/* Page Header */}
      <section className="bg-emerald-950 text-white py-12 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">Quality Assurance & Compliance</span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold">Standard Certifications</h1>
          <p className="text-emerald-300/80 text-sm max-w-xl mx-auto">Adhering to food safety, hygiene, and government quality guidelines.</p>
        </div>
      </section>

      {/* Primary Badges Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              id={`cert-card-${cert.id}`}
              className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-16 h-16 bg-emerald-50 rounded-xl flex items-center justify-center shadow-sm border border-emerald-100">
                  {getIcon(cert.iconName)}
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-lg text-stone-900">{cert.title}</h3>
                  <p className="text-[10px] text-stone-400 font-semibold uppercase">{cert.authority}</p>
                </div>
                <p className="text-stone-600 text-xs leading-relaxed border-t border-stone-100 pt-3 font-sans">
                  {cert.description}
                </p>
              </div>
              <div className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50/70 py-1.5 px-3 rounded-lg w-fit mt-4">
                {cert.year}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lab Testing Section */}
      <section className="bg-stone-100 py-16 border-y border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Lab narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl overflow-hidden border border-stone-200 shadow-sm relative">
              <img
                src={authorizedPhoto}
                alt="Authorized inspection of our Kallakurichi milling and packing floor"
                className="w-full h-56 sm:h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-stone-950/70 backdrop-blur-sm px-4 py-2.5">
                <p className="text-white text-xs font-bold flex items-center">
                  <VerifiedIcon className="w-3.5 h-3.5 mr-1.5 text-emerald-400 shrink-0" />
                  <span>Kallakurichi Mill Facility</span>
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <span className="text-xs text-emerald-800 font-bold uppercase tracking-wider flex items-center">
                <Microscope className="w-4 h-4 mr-1.5" />
                <span>Quality Auditing</span>
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
                Quality Checked Before Bagging
              </h2>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed font-sans">
              At Sri Kannika Parameswari Modern Rice Mill, quality control is integral to our operations. Incoming paddy batches undergo physical and moisture audits before entering storage silos.
            </p>
            <div className="bg-white p-4 rounded-xl border border-stone-200/60 space-y-2">
              <p className="font-bold text-xs text-stone-900">Standard Quality Metrics</p>
              <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-stone-600">
                <span className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1.5" /> Moisture: &lt; 13.5%</span>
                <span className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1.5" /> Broken Grain: &lt; 2.5%</span>
                <span className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1.5" /> Sortex Purity: 99%+</span>
                <span className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1.5" /> Stone Impurity: 0%</span>
              </div>
            </div>
          </div>

          {/* Detailed Audits */}
          <div className="lg:col-span-7 space-y-5">
            {labAudits.map((audit, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex items-start space-x-4">
                <span className="bg-emerald-50 text-emerald-800 font-mono font-bold text-xs w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100">
                  {idx + 1}
                </span>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-stone-900 text-sm">{audit.title}</h4>
                  <p className="text-stone-600 text-xs leading-relaxed font-sans">
                    {audit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
