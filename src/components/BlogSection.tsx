/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { BookOpen, ThumbsUp, MessageSquare, Calendar, User, ArrowLeft, ArrowRight, CornerDownRight, Sparkles } from "lucide-react";
import { BlogPost } from "../types";

interface BlogSectionProps {
  appBlogs: BlogPost[];
  onLikePost: (postId: string) => void;
  onAddComment: (postId: string, commentUser: string, commentText: string) => void;
}

export default function BlogSection({ appBlogs, onLikePost, onAddComment }: BlogSectionProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  
  // Comment forms states
  const [commentName, setCommentName] = useState<string>("");
  const [commentText, setCommentText] = useState<string>("");

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPost || !commentName || !commentText) return;

    onAddComment(selectedPost.id, commentName, commentText);

    // Sync active local lightbox/expanded post state with newly appended comment
    const updatedPost = { ...selectedPost };
    updatedPost.comments = [
      ...updatedPost.comments,
      {
        id: "CMT-" + Math.floor(Math.random() * 10000),
        user: commentName,
        comment: commentText,
        date: new Date().toISOString().split("T")[0]
      }
    ];

    setSelectedPost(updatedPost);
    setCommentName("");
    setCommentText("");
  };

  return (
    <section id="beauty-blog-section" className="py-20 bg-luxury-cream text-neutral-900 animate-fade-in select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-600 font-sans font-semibold text-xs uppercase tracking-widest block mb-2 font-medium">Beauty Tips & Gazettes</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-wide text-neutral-900">
            Tasleem Beauty Secrets
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4"></div>
        </div>

        {/* SINGLE BLOG VIEW MODE */}
        {selectedPost ? (
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-gold-200/50 p-6 md:p-10 shadow-xl space-y-6">
            
            <button
              id="blog-back-to-list"
              onClick={() => setSelectedPost(null)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-150 hover:bg-gold-50 hover:text-gold-600 text-xs font-bold uppercase transition-all mb-4 cursor-pointer text-neutral-700"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog List
            </button>

            {/* Poster Header */}
            <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-neutral-150 border border-gold-200/35">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-4">
              <span className="text-[10px] uppercase font-sans font-bold tracking-widest text-gold-600 bg-gold-550/10 px-2.5 py-1 rounded inline-block">
                {selectedPost.category}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide text-neutral-950">
                {selectedPost.title}
              </h3>

              <div className="flex flex-wrap gap-4 text-xs text-neutral-450 font-medium">
                <span className="flex items-center gap-1"><User className="w-4 h-4 text-gold-500" /> By {selectedPost.author}</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-gold-500" /> Published: {selectedPost.date}</span>
                <button
                  onClick={() => onLikePost(selectedPost.id)}
                  className="flex items-center gap-1 hover:text-gold-600"
                >
                  <ThumbsUp className="w-4 h-4 text-gold-500" /> Likes ({selectedPost.likes})
                </button>
              </div>
            </div>

            {/* Content Display (parsed smoothly with new lines as formatting helpers) */}
            <div className="text-neutral-700 text-xs sm:text-sm leading-relaxed space-y-4 pt-4 border-t border-gold-100 select-text whitespace-pre-line">
              {selectedPost.content}
            </div>

            {/* Interactive Comments Drawer */}
            <div className="border-t border-gold-150 pt-8 space-y-6">
              <h4 className="font-serif text-lg font-bold text-neutral-950 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-gold-500" /> Reader Comments ({selectedPost.comments.length})
              </h4>

              {/* Comments Listings */}
              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                {selectedPost.comments.map((comment) => (
                  <div key={comment.id} className="bg-neutral-50 rounded-2xl p-4 border border-neutral-150 flex gap-3">
                    <CornerDownRight className="w-4 h-4 text-gold-500 shrink-0 mt-1" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-neutral-950">{comment.user}</span>
                        <span className="text-[10px] text-neutral-400">{comment.date}</span>
                      </div>
                      <p className="text-xs text-neutral-600 mt-1 italic">
                        "{comment.comment}"
                      </p>
                    </div>
                  </div>
                ))}

                {selectedPost.comments.length === 0 && (
                  <p className="text-xs text-neutral-400 italic">No comments posted yet. Spark the discussion!</p>
                )}
              </div>

              {/* Form append comments */}
              <form onSubmit={handleCommentSubmit} className="grid grid-cols-1 gap-3 bg-neutral-50 p-4 rounded-2xl border border-neutral-150">
                <span className="block text-[10px] font-bold text-gold-600 uppercase tracking-wider">Leave a Comment</span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={commentName}
                    onChange={(e) => setCommentName(e.target.value)}
                    className="px-3 py-2 bg-white rounded-lg border border-neutral-250 focus:outline-none focus:border-gold-550"
                    required
                  />
                  
                  <button
                    id="submit-blog-comment-btn"
                    type="submit"
                    className="py-2 px-4 rounded-lg bg-neutral-950 hover:bg-gold-600 text-white font-bold uppercase text-[10px] tracking-wide transition-all self-end cursor-pointer"
                  >
                    Post Comment
                  </button>
                </div>

                <textarea
                  rows={2}
                  placeholder="Share your beauty query or thoughts..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-white rounded-lg border border-neutral-250 focus:outline-none focus:border-gold-550"
                  required
                />
              </form>
            </div>

          </div>
        ) : (
          /* BLOG LIST VIEW MODE */
          <div id="blog-listings-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appBlogs.map((post) => (
              <div
                key={post.id}
                id={`blog-card-${post.id}`}
                className="bg-white rounded-2xl overflow-hidden border border-gold-200/40 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Visual poster cover */}
                <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Card details body */}
                <div className="p-5 space-y-4 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] uppercase font-sans font-bold text-gold-600 tracking-wider">
                      {post.category}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-neutral-950 group-hover:text-gold-600 transition-colors line-clamp-2 mt-1">
                      {post.title}
                    </h4>
                    <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed mt-2.5">
                      {post.summary}
                    </p>
                  </div>

                  {/* Metadata & click callbacks */}
                  <div className="border-t border-gold-100 pt-4 flex items-center justify-between">
                    <span className="text-[10px] text-neutral-450 font-medium">
                      Date: {post.date}
                    </span>

                    <button
                      id={`read-blog-btn-${post.id}`}
                      onClick={() => handlePostClick(post)}
                      className="flex items-center gap-1 text-xs font-bold text-gold-600 hover:text-neutral-900 transition-colors uppercase cursor-pointer"
                    >
                      Read Secret <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
